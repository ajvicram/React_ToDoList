import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(true);
  const [update, setupdate] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        var res = await fetch("https://localhost:7002/api/Product");
        if (!res.ok) throw new Error("This is not data to fetch");
        var datas = await res.json();
        console.log("Hello");
        setData(datas);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [update]);
  const updates = (data) => {
    setData(data);
  };
  return (
    <>
      {open ? (
        <ShowData data={data} setOpens={setOpen} updateData={setupdate} />
      ) : (
        <>
          <ModelPopUp closeModel={setOpen} />
          <ShowData data={data} setOpens={setOpen} />
        </>
      )}
    </>
  );
}
function LidongData() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </>
  );
}
function ShowData({ data, setOpens, updateData }) {
  function GetDAta() {
    setOpens((x) => !x);
  }
  const DeleteFunction = async (id) => {
    var res = await fetch(`https://localhost:7002/api/Product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      console.log("Success fully deleted");
      updateData((x) => !x);
    } else {
      console.error("Not successfully deleted");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-end mt-1">
          <button className="btn btn-info" onClick={GetDAta}>
            Add
          </button>
        </div>
        <table className="table-container table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.price}</td>
                <td>
                  <button type="button" className="btn btn-info">
                    Add
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => DeleteFunction(x.id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function ModelPopUp({ closeModel }) {
  function GetCloseModel() {
    closeModel((x) => !x);
  }
  return (
    <>
      <div className="overlay">
        <div className="models">
          <div className="header">
            <div>
              <h1>Model</h1>
            </div>
            <button className="btn btn-danger" onClick={GetCloseModel}>
              close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
