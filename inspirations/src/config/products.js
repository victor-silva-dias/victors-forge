export const products = {
    academy: {
        id: 'prod_academy',
        name: 'Apolus Academy',
        description: 'Aprenda o método da Inteligência Jurídica Expandida.',
        cycles: {
            monthly: {
                price: '97.50',
            },
            quarterly: {
                price: '263.25',
                equivalent: '87.75',
            },
        },
    },
    tools: {
        id: 'prod_tools',
        name: 'Ferramentas de IA',
        description: 'Acesse nossas IAs especialistas para escalar sua advocacia.',
        plans: {
            essential: {
                name: 'Essencial',
                subtitle: 'Para quem está começando a explorar IA.',
                features: [
                    '<strong>Acesso ilimitado à Apolus Academy</strong>',
                    'Acesso a todas as Centrais e Copilotos',
                    '<strong>200</strong> interações/mês com Copilotos',
                    '<strong>80</strong> interações/mês com Centrais',
                ],
                cycles: {
                    monthly: {
                        promoPrice: '97.50',
                        originalPrice: '108.30',
                    },
                    quarterly: {
                        promoPrice: '263.25',
                        originalPrice: '292.50',
                        equivalent: '87.75',
                    },
                },
                academyDiscount: {
                    monthly: 0.20, // -20%
                    quarterly: 0.30, // -30%
                },
            },
            professional: {
                name: 'Profissional',
                subtitle: 'Para advogados que buscam alta produtividade.',
                ribbon: 'Mais Popular',
                features: [
                    'Tudo do plano Essencial, e mais:',
                    '<strong>600</strong> interações/mês com Copilotos',
                    '<strong>200</strong> interações/mês com Centrais',
                ],
                cycles: {
                    monthly: {
                        promoPrice: '170.55',
                        originalPrice: '189.50',
                    },
                    quarterly: {
                        promoPrice: '460.50',
                        originalPrice: '511.50',
                        equivalent: '153.50',
                    },
                },
                academyDiscount: {
                    monthly: 0.35, // -35%
                    quarterly: 0.45, // -45%
                },
            },
            executive: {
                name: 'Executivo',
                subtitle: 'Para quem precisa de máxima capacidade.',
                features: [
                    'Tudo do plano Profissional, e mais:',
                    '<strong>Interações Ilimitadas com Copilotos</strong>',
                    '<strong>500</strong> interações/mês com Centrais',
                ],
                cycles: {
                    monthly: {
                        promoPrice: '314.55',
                        originalPrice: '349.50',
                    },
                    quarterly: {
                        promoPrice: '849.50',
                        originalPrice: '943.50',
                        equivalent: '283.20',
                    },
                },
                includesAcademy: true, // Regra de Bundle
                academyDiscount: {
                    monthly: 1, // 100%
                    quarterly: 1, // 100%
                },
            },
        },
    },
};

export const enterprisePlan = {
    name: 'Enterprise',
    subtitle: 'Solução para equipes de alta performance.',
    ctaText: 'Fale com um Especialista',
    features: [
        'Onboarding personalizado (time/equipe)',
        'Integrações corporativas (SSO/SAML, API)',
        'Viabilidade de features personalizadas / co-criação',
        'Suporte e limites sob medida',
    ],
    ctaLink: 'https://wa.link/i0joap',
    isEnterprise: true,
};

// Placeholder para futuras regras de cupons
export const coupons = {
    '3X60': {
        type: 'fixed_price',
        product: 'academy',
        value: 60.00,
        duration: 3, // meses
    },
    '30DIASGRATIS': {
        type: 'free_trial',
        product: 'tools',
        duration: 30, // dias
    }
};
