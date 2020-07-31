import React, {useState} from 'react';
import './App.css';
import data from './data.json';
import Modal from './Modal';

const App = () => {
  const [show, setShow] = useState(false);

  const showModal = (event) => {
    !show && setShow(true);
  };

  const hideModal = () => {
    show && setShow(false);
  };

  return (
    <div className="App flex">
      {
      data.members.map((eachMember, index) => 
        <div className='eachdata' key={index} onClick={showModal}>
          {eachMember.real_name}
          <Modal show={show} handleClose={hideModal}>
            <div>
            {
            eachMember.activity_periods.map((eachPeriod, index) => 
              <div key={index}>
                Start Time: {eachPeriod.start_time}  End Time: {eachPeriod.end_time}
              </div>
            )
            }</div>
          </Modal>
        </div>
      )
      }
    </div>
  );
}

export default App;
