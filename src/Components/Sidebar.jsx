import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [showUsage, setShowUsage] = useState(true); // state to show helpful chat flow usage info

  // Tell drag & drop usage of nodes to user on first load of the application
  useEffect(() => {
    setTimeout(() => {
      setShowUsage(false);
    }, 25000);
  }, [showUsage]);

  // display show node usage information on first load of the application
  const displayUsage = showUsage ? '' : 'none';

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  // You can expand upon adding new nodes by change the type from default
  return (
    <>
      <aside>
      <div className="description" style={{ display: displayUsage}}>
        Drag the New node to the panel on the left to add new nodes.
      </div>

        <div
          className="appnode"
          onDragStart={(event) => onDragStart(event, 'default')}
          draggable
        >
          <span
            className="material-symbols-outlined"
          >
            Add New node
          </span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
