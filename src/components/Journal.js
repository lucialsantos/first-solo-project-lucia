// import React, { useState } from 'react';

// function Journal() {
//   const [entries, setEntries] = useState([]);
//   const [newEntry, setNewEntry] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEntries([...entries, newEntry]);
//     setNewEntry('');
//   }

//   return (
//     <div>
      
//       <form onSubmit={handleSubmit}>
//       <label>
//           Journaling
//       </label>
//         <textarea value={newEntry} onChange={e => setNewEntry(e.target.value)} />
//         <button type="submit">Save</button>
      
//       </form>
//       <ul>
//         {entries.map((entry, index) => (
//           <li key={index}>{entry}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Journal;
