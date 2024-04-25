import { useState, useEffect } from 'react';
import { useReactFlow } from 'reactflow';

const UpdateNode = ({
  selectedNode,
  setNodeSelected,
  setNodes,
  setNewNodeLabel,
}) => {
  const [nodeName, setNodeName] = useState(selectedNode.data['label']);
  const id = selectedNode.id;
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    setNodeName(selectedNode.data['label']);
  }, [id]);

  useEffect(() => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === selectedNode.id) {
          return {
            ...node,
            data: {
              ...node.data,
              label: nodeName,
            },
          };
        }
        return node;
      })
    );
  }, [selectedNode, nodeName, setNodes]);

  const mainSidebar = () => {
    setNodeSelected(false);
  };

  return (
    <>
      <div className="update">
        <div className="back">
          <button
            className="material-symbols-outlined"
            style={{ margin: 10, cursor: 'pointer' }}
            onClick={mainSidebar}
          >
            Go back
          </button>
          <br />
          <br />
          <br />
          <h1 style={{  margin: 10, textAlign: 'center' }}>Message</h1>
        </div>
      </div>
      <div style={{ width: `100%`, height: 2, background: 'grey' }}></div>

      <div className="update">
        <h1 style={{  margin: 10 }}>Text :</h1>
        <textarea
          rows="4"
          cols="25"
          value={nodeName}
          onChange={(evt) => {
            setNodeName(evt.target.value);
          }}
          style={{ marginBottom: 15, borderRadius: 5 }}
        />
      </div>
      <div style={{ width: `100%`, height: 2, background: 'grey' }}></div>
    </>
  );
};

export default UpdateNode;
