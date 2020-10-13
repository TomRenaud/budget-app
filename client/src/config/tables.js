export const transactionsColumns = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Catégorie',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Montant',
        dataIndex: 'amount',
        key: 'amount',
        render: (amount) => `${amount} €`
    }
];

export const chargesColumns = [
    {
        title: 'Date de prélèvement',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Catégorie',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Montant',
        dataIndex: 'amount',
        key: 'amount',
        render: (amount) => `${amount} €`
    }
];

export const transactionsCategories = [
    {
        value: "food",
        label: "Alimentaire",
    },
    {
        value: "gas",
        label: "Carburant",
    },
    {
        value: "shopping",
        label: "Shopping",
    },
    {
        value: "travel",
        label: "Voyage",
    },
    {
        value: "water",
        label: "Eau",
    },
    {
        value: "trash",
        label: "Poubelles",
    },
    {
        value: "taxes",
        label: "Impôts",
    },
    {
        value: "housing_taxes",
        label: "Taxe habitation",
    },
    {
        value: "beauty",
        label: "Beauté",
    },
    {
        value: "work_food",
        label: "Restauration (travail)",
    },
    {
        value: "tools",
        label: "Bricolage",
    },
    {
        value: "hair_dresser",
        label: "Coiffeur",
    },
    {
        value: "credit_card",
        label: "Carte de crédit",
    },
    {
        value: "fioul",
        label: "Fioul",
    }
];

export const chargesCategories = [
    {
        value: "rent",
        label: "Loyer"
    },
    {
        value: "credit_auto",
        label: "Crédit Auto"
    },
    {
        value: "edf",
        label: "EDF"
    },
    {
        value: "insurance_moto",
        label: "Assurance Moto"
    },
    {
        value: "mobile",
        label: "Abonnement Mobile"
    },
    {
        value: "credit_card_fees",
        label: "Carte Bancaire"
    },
    {
        value: "apple_music",
        label: "Abonnement Apple Music"
    },
    {
        value: "disney_plus",
        label: "Disney Plus"
    }
];