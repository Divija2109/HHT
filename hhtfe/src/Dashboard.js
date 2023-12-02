//with chart functionality----
import React, { useState } from 'react';
import Chart from './Chart';

const Dashboard = () => {
  // State to manage the active tab (channel or equipment)
  const [activeTab, setActiveTab] = useState('channel');
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');

  // Sample equipment data
  const equipmentList = ['Equipment 1', 'Equipment 2', 'Equipment 3', 'Equipment 4', 'Equipment 5'];

  const handleShowChart = () => {
    // Implement logic to show the chart based on selected equipment, start, and end values
    
    console.log('Show Chart Button Clicked');
  };
  
  return (
    <div>
      {/* Buttons for Channel and Equipment */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setActiveTab('channel')}>Channel</button>
        <button onClick={() => setActiveTab('equipment')}>Equipment</button>
      </div>

      {/* Container for content */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {activeTab === 'channel' && (
          <div>
            {/* Add your channel content here */}
            <p>Channel Content Goes Here</p>
          </div>
        )}

        {activeTab === 'equipment' && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Equipment List */}
            <div>
              <h2>Equipment List</h2>
              <ul>
                {equipmentList.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>

            {/* Equipment Dropdown */}
            <div style={{ marginLeft: '10px' }}>
              <label htmlFor="equipmentDropdown">Choose Equipment:</label>
              <select
                id="equipmentDropdown"
                value={selectedEquipment || ''}
                onChange={(e) => setSelectedEquipment(e.target.value)}
              >
                <option value="" disabled>
                  Choose Equipment
                </option>
                {equipmentList.map((equipment, index) => (
                  <option key={index} value={equipment}>
                    {equipment}
                  </option>
                ))}
              </select>
            </div>

            {/* Textboxes for 'start' and 'end' */}
            <div style={{ marginLeft: '10px' }}>
              <label htmlFor="start">Start:</label>
              <input
                type="text"
                id="start"
                value={startValue}
                onChange={(e) => setStartValue(e.target.value)}
              />

              <label htmlFor="end" style={{ marginLeft: '10px' }}>
                End:
              </label>
              <input
                type="text"
                id="end"
                value={endValue}
                onChange={(e) => setEndValue(e.target.value)}
              />

              {/* Show Chart Button */}
              <button onClick={handleShowChart} style={{ marginLeft: '10px' }}>
                Show Chart
              </button>
            </div>
          </div>
        )}
      </div>

      <Chart />
      

    </div>
  );
};
export default Dashboard;







// Working code----
// import React, { useState } from 'react';

// const Dashboard = () => {
//   // State to manage the active tab (channel or equipment)
//   const [activeTab, setActiveTab] = useState('channel');
//   const [selectedEquipment, setSelectedEquipment] = useState(null);
//   const [startValue, setStartValue] = useState('');
//   const [endValue, setEndValue] = useState('');

//   // Sample equipment data
//   const equipmentList = ['Equipment 1', 'Equipment 2', 'Equipment 3', 'Equipment 4', 'Equipment 5'];

//   const handleShowChart = () => {
//     // Implement logic to show the chart based on selected equipment, start, and end values
    
//     console.log('Show Chart Button Clicked');
//   };
  
//   return (
//     <div>
//       {/* Buttons for Channel and Equipment */}
//       <div style={{ marginBottom: '10px' }}>
//         <button onClick={() => setActiveTab('channel')}>Channel</button>
//         <button onClick={() => setActiveTab('equipment')}>Equipment</button>
//       </div>

//       {/* Container for content */}
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         {activeTab === 'channel' && (
//           <div>
//             {/* Add your channel content here */}
//             <p>Channel Content Goes Here</p>
//           </div>
//         )}

//         {activeTab === 'equipment' && (
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             {/* Equipment List */}
//             <div>
//               <h2>Equipment List</h2>
//               <ul>
//                 {equipmentList.map((equipment, index) => (
//                   <li key={index}>{equipment}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Equipment Dropdown */}
//             <div style={{ marginLeft: '10px' }}>
//               <label htmlFor="equipmentDropdown">Choose Equipment:</label>
//               <select
//                 id="equipmentDropdown"
//                 value={selectedEquipment || ''}
//                 onChange={(e) => setSelectedEquipment(e.target.value)}
//               >
//                 <option value="" disabled>
//                   Choose Equipment
//                 </option>
//                 {equipmentList.map((equipment, index) => (
//                   <option key={index} value={equipment}>
//                     {equipment}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Textboxes for 'start' and 'end' */}
//             <div style={{ marginLeft: '10px' }}>
//               <label htmlFor="start">Start:</label>
//               <input
//                 type="text"
//                 id="start"
//                 value={startValue}
//                 onChange={(e) => setStartValue(e.target.value)}
//               />

//               <label htmlFor="end" style={{ marginLeft: '10px' }}>
//                 End:
//               </label>
//               <input
//                 type="text"
//                 id="end"
//                 value={endValue}
//                 onChange={(e) => setEndValue(e.target.value)}
//               />

//               {/* Show Chart Button */}
//               <button onClick={handleShowChart} style={{ marginLeft: '10px' }}>
//                 Show Chart
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

      

//     </div>
//   );
// };
// export default Dashboard;




