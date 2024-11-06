import React, { Component } from 'react';

class TableauUtilisateurs extends Component {
  render() {
    return (
      <div className="overflow-x-auto shadow rounded">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Prénom</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Nom</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Email</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Téléphone</th>
              <th className="px-4 py-3 text-center font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {this.props.utilisateurs.map(utilisateur => (
              <tr key={utilisateur.id}>
                <td className="px-4 py-3 whitespace-nowrap">{utilisateur.prenom}</td>
                <td className="px-4 py-3 whitespace-nowrap">{utilisateur.nom}</td>
                <td className="px-4 py-3 whitespace-nowrap">{utilisateur.email}</td>
                <td className="px-4 py-3 whitespace-nowrap">{utilisateur.telephone}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => this.props.onModifier(utilisateur)}
                      className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => this.props.onSupprimer(utilisateur.id)}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
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
}

export default TableauUtilisateurs;