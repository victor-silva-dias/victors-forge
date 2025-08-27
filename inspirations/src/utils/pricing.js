import { products } from '../config/products';

// Função para converter string de preço para número
const parsePrice = (priceString) => {
    if (typeof priceString !== 'string') return 0;
    return parseFloat(priceString);
};

export const calculateBestPrice = (selection) => {
    const { wantsTools, wantsAcademy, selectedPlan, billingCycle, couponCode } = selection;
    
    let total = 0;
    const items = [];
    let discountApplied = null;

    // Se nada for selecionado, retorna zero
    if (!wantsTools && !wantsAcademy) {
        return { finalPrice: 0, items: [], discountApplied: null };
    }

    // 1. Calcula o preço das Ferramentas de IA
    let toolsPrice = 0;
    if (wantsTools && selectedPlan) {
        const planData = products.tools.plans[selectedPlan];
        const cycleData = planData.cycles[billingCycle];
        toolsPrice = parsePrice(cycleData.promoPrice);
        items.push({
            name: `Ferramentas de IA - Plano ${planData.name}`,
            price: toolsPrice,
            cycle: billingCycle,
        });
        total += toolsPrice;
    }

    // 2. Calcula o preço da Apolus Academy
    let academyPrice = 0;
    if (wantsAcademy) {
        const baseAcademyPrice = parsePrice(products.academy.cycles[billingCycle].price);
        let finalAcademyPrice = baseAcademyPrice;
        let discountPercentage = 0;

        // Aplica desconto se as Ferramentas também estiverem selecionadas
        if (wantsTools && selectedPlan) {
            const planData = products.tools.plans[selectedPlan];
            
            if (planData.includesAcademy) {
                discountPercentage = 1; // 100% de desconto
                discountApplied = 'Academy Inclusa';
            } else {
                discountPercentage = planData.academyDiscount[billingCycle];
                discountApplied = `Desconto de Assinante (${(discountPercentage * 100).toFixed(0)}%)`;
            }
            finalAcademyPrice = baseAcademyPrice * (1 - discountPercentage);
        }
        
        academyPrice = finalAcademyPrice;
        items.push({
            name: 'Apolus Academy',
            price: academyPrice,
            originalPrice: baseAcademyPrice,
            cycle: billingCycle,
            note: discountApplied,
        });
        total += academyPrice;
    }

    // Lógica de Cupom (Placeholder para futura implementação da regra "melhor condição")
    if (couponCode) {
        // Exemplo: if (couponDiscount > (totalOriginal - total)) { apply coupon }
    }

    return {
        finalPrice: total,
        items,
        discountApplied,
    };
};
