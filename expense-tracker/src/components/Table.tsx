export default function TransactionsTable() {
  // Mock data - données fictives pour tester l'affichage
  const mockTransactions = [
    {
      id: 1,
      date: "2023-10-15",
      description: "Courses alimentaires",
      amount: -85.99,
      category: "Alimentation"
    },
    {
      id: 2,
      date: "2023-10-16",
      description: "Salaire",
      amount: 2500.00,
      category: "Revenu"
    },
    {
      id: 3,
      date: "2023-10-17",
      description: "Essence voiture",
      amount: -55.30,
      category: "Transport"
    },
    {
      id: 4,
      date: "2023-10-18",
      description: "Restaurant",
      amount: -32.50,
      category: "Loisirs"
    },
    {
      id: 5,
      date: "2023-10-19",
      description: "Remboursement ami",
      amount: 120.00,
      category: "Autre"
    }
  ];

  // Fonctions de gestion (simulées)
  const handleEdit = (transaction) => {
    console.log("Édition de:", transaction);
    alert(`Mode édition pour: ${transaction.description}`);
  };

  const handleDelete = (id) => {
    console.log("Suppression de:", id);
    alert(`Transaction ${id} sera supprimée`);
  };

  return (
    <div className="overflow-x-auto p-4 bg-white rounded-lg shadow">
      <table className="table w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left py-3 px-4">Date</th>
            <th className="text-left py-3 px-4">Description</th>
            <th className="text-right py-3 px-4">Montant</th>
            <th className="text-left py-3 px-4">Catégorie</th>
            <th className="text-center py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockTransactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-50 border-t">
              <td className="py-3 px-4">{transaction.date}</td>
              <td className="py-3 px-4">{transaction.description}</td>
              <td className={`py-3 px-4 text-right font-medium ${
                transaction.amount < 0 ? 'text-red-600' : 'text-green-600'
              }`}>
                {transaction.amount.toFixed(2)} €
              </td>
              <td className="py-3 px-4">
                <span className="badge badge-outline bg-blue-50 text-blue-600">
                  {transaction.category}
                </span>
              </td>
              <td className="py-3 px-4 text-center">
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => handleEdit(transaction)}
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    Éditer
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm('Supprimer cette transaction ?')) {
                        handleDelete(transaction.id);
                      }
                    }}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Supprimer
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}