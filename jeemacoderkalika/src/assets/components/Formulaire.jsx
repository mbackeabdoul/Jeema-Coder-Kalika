
import React, { Component } from 'react';

class Formulaire extends Component {
  state = {
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    id: null
  };

  componentDidUpdate(prevProps) {
    const utilisateur = this.props.utilisateurAModifier;
    if (utilisateur && utilisateur !== prevProps.utilisateurAModifier) {
      this.setState({
        prenom: utilisateur.prenom,
        nom: utilisateur.nom,
        email: utilisateur.email,
        telephone: utilisateur.telephone,
        id: utilisateur.id
      });
    }
  }

  viderFormulaire = () => {
    this.setState({
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      id: null
    });
  };

  soumettre = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.props.modifierUtilisateur(this.state);
    } else {
      this.props.ajouterUtilisateur(this.state);
    }
    this.viderFormulaire();
  };

  changerValeur = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const modeEdition = Boolean(this.state.id);

    return (
      <form onSubmit={this.soumettre} className="bg-white shadow-md rounded p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Prénom
            </label>
            <input
              type="text"
              name="prenom"
              value={this.state.prenom}
              onChange={this.changerValeur}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              value={this.state.nom}
              onChange={this.changerValeur}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.changerValeur}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              name="telephone"
              value={this.state.telephone}
              onChange={this.changerValeur}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className={`
              px-6 py-2 rounded text-white font-bold
              ${modeEdition 
                ? 'bg-yellow-500 hover:bg-yellow-600' 
                : 'bg-green-500 hover:bg-green-600'
              }
            `}
          >
            {modeEdition ? 'Modifier' : 'Ajouter'}
          </button>
        </div>
      </form>
    );
  }
}

export default Formulaire;