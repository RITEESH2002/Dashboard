import React from 'react';
import {Header} from "../components"
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter} from "@syncfusion/ej2-react-grids"
import {customersData, customersGrid} from '../data/dummy.js'

const Customers = () => {
  return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Customers" />
        <GridComponent dataSource={customersData}
        allowPaging toolbar={['Delete']}
        editSettings={{
          allowDeleting:true,
          allowEditing:true,
        }}
        selectionSettings={ {persistSelection:true} }
        allowSorting
        width="auto">
          <ColumnsDirective>
            {customersGrid.map( (item, index) => (
            <ColumnDirective key={index}{...item} />))}
            <Inject services={[ Page, Toolbar, Selection, Edit, Sort, Filter]}></Inject>
          </ColumnsDirective>
        </GridComponent>
      </div>
  );
}

export default Customers;
