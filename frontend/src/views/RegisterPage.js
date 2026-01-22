import React from 'react';

function RegisterPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6">S'inscrire</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nom</label>
          <input className="mt-1 block w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 block w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Mot de passe</label>
          <input type="password" className="mt-1 block w-full rounded border px-3 py-2" />
        </div>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Créer un compte</button>
      </form>
    </div>
  );
}

export default RegisterPage;
