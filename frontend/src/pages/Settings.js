import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const Settings = () => {
  const { user, updateUser } = useAuthContext();

  const [wallets, setWallets] = useState(user.wallets || []);
  const [newWallet, setNewWallet] = useState({ name: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wallets.length < 5) {
      setWallets([...wallets, newWallet]);
      setNewWallet({ name: '', address: '' });
      updateUser({ ...user, wallets: [...wallets, newWallet] });
    }
  };

  const handleDelete = (index) => {
    const newWallets = [...wallets];
    newWallets.splice(index, 1);
    setWallets(newWallets);
    updateUser({ ...user, wallets: newWallets });
  };

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={newWallet.name}
            onChange={(e) => setNewWallet({ ...newWallet, name: e.target.value })}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={newWallet.address}
            onChange={(e) => setNewWallet({ ...newWallet, address: e.target.value })}
          />
        </label>
        <button type="submit">Add Wallet</button>
      </form>
      <ul>
        {wallets.map((wallet, index) => (
          <li key={index}>
            <strong>{wallet.name}</strong>: {wallet.address}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;
