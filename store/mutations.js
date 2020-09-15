export default {

    addSales: (state, salesData) => {
        console.log(salesData)
        state.sales.push(salesData)
    },

    addDelivery: (state, deliveryData) => {
        console.log(deliveryData)
        state.push(deliveryData)
    },

    addSupplier: (state, supplierData) => {
        console.log(supplierData)
        state.suppliers.push(supplierData)
    },

    addRole: (state, roleData) => {
        console.log(roleData)
        state.roles.push(roleData)
    },

    addUser: (state, userData) => {
        console.log(userData)
        state.user.push(userData)
    },

    addInventory: (state, inventoryData) => {
        console.log(inventoryData)
        state.push(inventoryData)
    },



}
    // =======================================================

//     setRolesList(state, data){
//         state.rolesList = data;
//     },

//     addRole(state, role_name){
//         //console.log('hehe',role_name)
//         state.rolesList.unshift(role_name)
//     },

//     updateRole(state, data){
        
//         console.log('@mutation: ', data)
//         const index = state.rolesList.findIndex(
//             rolesList => {
//                 rolesList.role_code = data.role_code
//             }
//         )
//     },




//     setUserList(state, data){
//         state.userList = data;
//     },

//     addUser(state, data){
//         console.log('@mutation: ',data);
//         state.userList.push(data)
//     },

//     updateUser(state, data){
//         console.log('@mutation: ', data)
//         const index = state.userList.findIndex(
//             userList => {
//                 userList.users_code = data.users_code
//             }
//         )
//     },









//     addSelectedRole(state, role) {
//         console.log('@here: ',role)
//         state.selectedRole = role;
//     },





//     setInventoryList(state, data){
//         state.inventoryList = data;
//     },

//     updateInventory(state, data){
//         console.log('@mutation: ', data)
//         const index = state.inventoryList.findIndex(
//             inventoryList => {
//                 inventoryList.inventory_code = data.inventory_code
//             }
//         )
//     },






//     setSuppliersList(state, data){
//         state.suppliersList = data;
//     },

//     addSupplier(state, data){
//         console.log('@mutation: ',data);
//         state.suppliersList.push(data)
//     },

//     updateSupplier(state, data){
//         console.log('@mutation: ', data)
//         const index = state.suppliersList.findIndex(
//             suppliersList => {
//                 suppliersList.supplier_id = data.supplier_id
//             }
//         )
//     },

    



//     setDTransactionsList(state, data) {
//         state.deliveryList = data;
//     },

//     delivery(state, data) {
//         state.deliveryList = data;
//     },





//     setSalesList(state, data) {
//         state.salesList = data;
//     }
// }