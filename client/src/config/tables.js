import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const transactionsColumns = (onDelete) => [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        align: "center",
        render: (date) => date.format("DD/MM/YYYY")
    },
    {
        title: 'Catégorie',
        dataIndex: 'category',
        key: 'category',
        align: "center",
    },
    {
        title: 'Montant',
        dataIndex: 'amount',
        key: 'amount',
        align: "center",
        render: (amount) => `${amount} €`
    },
    {
        dataIndex: 'id',
        key: 'id',
        align: "center",
        render: (id) => (
            <div>
                <Button
                    icon={<DeleteOutlined />}
                    shape="circle"
                    type="danger"
                    onClick={() => onDelete(id)}
                />
            </div>
        )
    }
];

export const chargesColumns = (onDelete) => [
    {
        title: 'Date de prélèvement',
        dataIndex: 'date',
        key: 'date',
        align: "center",
        render: (date) => date.format("DD/MM/YYYY")
    },
    {
        title: 'Catégorie',
        dataIndex: 'category',
        key: 'category',
        align: "center",
    },
    {
        title: 'Montant',
        dataIndex: 'amount',
        key: 'amount',
        align: "center",
        render: (amount) => `${amount} €`
    },
    {
        dataIndex: 'id',
        key: 'id',
        align: "center",
        render: (id) => (
            <div>
                <Button
                    icon={<DeleteOutlined />}
                    shape="circle"
                    type="danger"
                    onClick={() => onDelete(id)}
                />
            </div>
        )
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