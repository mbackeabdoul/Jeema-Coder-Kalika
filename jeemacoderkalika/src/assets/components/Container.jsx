import React, { Component } from 'react';
import Formulaire from './Formulaire';
import TableauUtilisateurs from './TableauUtilisateurs';

class Container extends Component {
  state = {
    listeUtilisateurs: [],
    utilisateurAModifier: null
  };

  ajouterUtilisateur = (nouvelUtilisateur) => {
    const utilisateur = {
      ...nouvelUtilisateur,
      id: Date.now()
    };
    this.setState({
      listeUtilisateurs: [...this.state.listeUtilisateurs, utilisateur]
    });
  };

  modifierUtilisateur = (utilisateurModifie) => {
    const nouvelleListeUtilisateurs = this.state.listeUtilisateurs.map(user => 
      user.id === utilisateurModifie.id ? utilisateurModifie : user
    );
    this.setState({
      listeUtilisateurs: nouvelleListeUtilisateurs,
      utilisateurAModifier: null
    });
  };

  supprimerUtilisateur = (idUtilisateur) => {
    const nouvelleListeUtilisateurs = this.state.listeUtilisateurs.filter(
      user => user.id !== idUtilisateur
    );
    this.setState({ listeUtilisateurs: nouvelleListeUtilisateurs });
  };

  selectionnerPourModification = (utilisateur) => {
    this.setState({ utilisateurAModifier: utilisateur });
  };

  render() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl text-center font-bold mb-8">
          Gestion des Utilisateurs
        </h1>
        
        <Formulaire 
          ajouterUtilisateur={this.ajouterUtilisateur}
          modifierUtilisateur={this.modifierUtilisateur}
          utilisateurAModifier={this.state.utilisateurAModifier}
        />

        <div className="mt-8 border-t pt-8">
          <h2 className="text-xl text-center font-semibold mb-6">
            Liste des Utilisateurs
          </h2>
          
          <TableauUtilisateurs 
            utilisateurs={this.state.listeUtilisateurs}
            onModifier={this.selectionnerPourModification}
            onSupprimer={this.supprimerUtilisateur}
          />
        </div>
      </div>
    );
  }
}

export default Container;