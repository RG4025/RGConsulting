
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import User from "./User";

export default function SecondTool() {
  const column = [
    {
      name: "Item Name",
      selector: row => row.name,
      sortable:true
    },
    {
        name: "Last Updated",
        selector: row => row.update,
        sortable:true
    },
    {
        name: "View",
        selector: row => row.view,
        sortable:true
    },
    {
        name: "Favorites",
        selector: row => row.fav,
        sortable:true
    },
    {
        name: "Contributes",
        selector: row => row.contri,
        sortable:true
    },
  ];

  const data = [
    {
      name: "Marketing Tool",
      update: "JAN 5, 2023",
      view: 249,
      fav: 0,
      contri: "Anonymous",
    },
    {
      name: "Time Management Tool",
      update: "JAN 5, 2023",
      view: 99,
      fav: 0,
      contri: "Anonymous",
    },
    {
      name: "Community Tool",
      update: "FEB 28, 2023",
      view: 49,
      fav: 0,
      contri: "Anonymous",
    },
    {
      name: "Alpha Tool",
      update: "JUN 8, 2023",
      view: 98,
      fav:89,
      contri: "Anonymous",
    },
    {
      name: "Communication",
      update: "MARCH 5, 2023",
      view: 29,
      fav: 90,
      contri: "Anonymous",
    },
    {
      name: "Time Management Tool",
      update: "JAN 5, 2023",
      view: 249,
      fav: 0,
      contri: "Anonymous",
    },
    {
      name: "Time Management Tool",
      update: "JAN 5, 2023",
      view: 249,
      fav: 0,
      contri: "Anonymous",
    },
    {
        name: "Bita Tool",
        update: "FEB 28, 2023",
        view: 49,
        fav: 0,
        contri: "Anonymous",
    },
    {
      name: "Time Management Tool",
      update: "JAN 5, 2023",
      view: 249,
      fav: 0,
      contri: "Anonymous",
    },
    {
        name: "Marketing Tool",
        update: "JAN 5, 2023",
        view: 249,
        fav: 0,
        contri: "Anonymous",
    },
    {
      name: "Time Management Tool",
      update: "JAN 5, 2023",
      view: 24679,
      fav: 0,
      contri: "Anonymous",
    },
    {
      name: "Load Management Tool",
      update: "JAN 5, 2023",
      view: 24789,
      fav: 0,
      contri: "Anonymous",
    },
    {
        name: "Community Tool",
        update: "FEB 28, 2023",
        view: 4989,
        fav: 0,
        contri: "Anonymous",
    },
    {
      name: "Time Management Tool",
      update: "JAN 5, 2023",
      view: 2479,
      fav: 0,
      contri: "Anonymous",
    },
    {
        name: "Marketing Tool",
        update: "JAN 5, 2023",
        view: 2469,
        fav: 0,
        contri: "Anonymous",
    },
    {
      name: "Time Management Tool",
      update: "JAN 5, 2023",
      view: 24129,
      fav: 0,
      contri: "Anonymous",
    },
    {
      name: "Time Management Tool",
      update: "JAN 5, 2023",
      view: 24239,
      fav: 0,
      contri: "Anonymous",
    },
    {
        name: "Community Tool",
        update: "FEB 28, 2023",
        view: 349,
        fav: 0,
        contri: "Anonymous",
    },
    {
      name: "Time Management Tool",
      update: "JAN 5, 2023",
      view: 24549,
      fav: 0,
      contri: "Anonymous",
    },
    {
        name: "Marketing Tool",
        update: "JAN 5, 2023",
        view: 239,
        fav: 0,
        contri: "Anonymous",
    },
    
  ];

  const [find, setFind] = useState(data);

  function finding(rg){
      const newData = data.filter(row =>{
        return ( row.name.toLowerCase().includes(rg.target.value.toLowerCase()));
      })

      setFind(newData);
  }


  // <User/>
  return (
    <>
      <section className="container-fluid">
        <div className="container">

          <div className="d-flex justify-content-center">
            <div>
            <label className="btn btn-primary">Find</label>
            <input type="text" onChange={finding} className="ms-1 py-1"/>
            </div>
          </div>
          <DataTable columns={column} data={find}  selectableRows fixedHeader pagination>
          
          </DataTable>
        </div>
      </section>
    </>
  );
}
