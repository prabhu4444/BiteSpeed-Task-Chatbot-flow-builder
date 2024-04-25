import { Handle, Position } from 'reactflow';

// Custom node component to add nodes with header & custom node styling
const Node = ({ data }) => {
  // Render the custom node component
  return (
    <div>
      {/* Header section */}
      <div
        style={{
          backgroundColor: '#b2f0e3',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          fontWeight: 'bold',
          color: 'black',
          paddingLeft: 15,
          paddingTop: 3,
          paddingBottom: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 275,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
      
          {/* Node heading */}
          {data.heading}
        </div>
        
      </div>
      {/* Node content */}
      <div
        style={{
          padding: 15,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: 'white',
        }}
      >
        {/* Node label */}
        <div
          style={{
            color: 'black',
          }}
        >
          {data.label}
        </div>
      </div>
      {/* Handles for connecting edges */}
      <Handle type="source" position={Position.Right} id="source" />
      <Handle type="target" position={Position.Left} id="target" />
    </div>
  );
};

export default Node;
