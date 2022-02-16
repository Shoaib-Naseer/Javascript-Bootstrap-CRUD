const productdb=(dbname,table)=>{
    const db = new Dexie(dbname);
    db.version(1).stores(table);
    db.open();

    return db;
}

const bulkcreate = ( dbtable,data) =>{
    dbtable.bulkAdd([data])
}

export default productdb;