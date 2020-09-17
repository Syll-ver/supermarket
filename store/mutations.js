export default {

    login: (state, login) => {
        // const user = state.users.find(p => p.username === login.user.username)
        for(var i = 0; i < state.users.length; i++){
            if(state.users[i].username == login.user.username){
                // if(state.users[i].password == login.user.password){
                    localStorage.username = state.users[i].username
                    localStorage.role_name = state.users[i].role_name
                // } else {
                //     alert('Wrong Password')
                // }
            // } else {
            //     alert('User does not exist')
            }
        }

    },

    addSales: (state, salesData) => {
        state.sales_transactions.push(salesData.sales)
    },

    updateInvQty: (state, payload) => {

        for(var j = 0; j < payload.invqty.length; j++){
            if(payload.invqty.transaction == 'sales'){
                for(var i = 0; i < state.inventoryList.length; i++){
                    if(state.inventory[i].barcode == payload.invqty[j].barcode){
                        state.inventory[i].qty = (state.inventory[i].qty - payload.invqty[j].qty)
                    }
                }
            } else if(payload.invqty.transaction == 'delivery'){
                for(var i = 0; i < state.inventoryList.length; i++){
                    if(state.inventory[i].barcode == payload.invqty[j].barcode){
                        state.inventory[i].qty += parseInt(payload.invqty[j].qty)
                    }
                }
            }
        }

    },

    receiveDelivery: (state, delivery) => {
        var total_cost = 0;
        //loop through items to get qty*amt and add every total to total_cost
        for(var i = 0; i < delivery.transaction.items.length; i++){
            //if barcode is not found in state.inventory, push to state.inventory
            //else, skip for-loop
            var found = false;
            for(var j = 0; j < state.inventoryList.length; j++){
                if(state.inventory[j].barcode == delivery.transaction.items[i].barcode){
                    found = true;
                }
            }

            if(!found){
                state.inventoryList.push(delivery.transaction.items[i])
            }
            
            
            //compute total cost
            var total = (parseInt(delivery.transaction.items[i].qty) * parseInt(delivery.transaction.items[i].unit_cost))
            total_cost += total;
        }
        // add to object then push to delivery_transactions
        delivery.transaction.total_cost = total_cost
        state.delivery_transactions.push(delivery.transaction)
    },


    addSupplier: (state, supplierData) => {
        console.log(supplierData.supplier)
        state.suppliersList.push(supplierData.supplier)
    },

    updateSupplier: (state, payload) => {
        console.log(payload.supplier);
        console.log('payload.company_name: ', payload.supplier.company_name);
        const supplier = state.suppliersList.find(p => p.supplier_code === payload.supplier.supplier_code)
        supplier.company_name = payload.supplier.company_name
        supplier.contact_no = payload.supplier.contact_no
        supplier.company_address = payload.supplier.company_address
        supplier.status = payload.supplier.status
    },

    addRole: (state, roleData) => {
        console.log(roleData)
        state.rolesList.push(roleData)
    },

    updateRole: (state, payload) => {
        console.log(payload.role);
        console.log('payload.role_name: ', payload.role.role_name);
        const role = state.rolesList.find(p => p.role_id === payload.role.role_id)
        role.role_name = payload.role.role_name
    },



    addUser: (state, userData) => {
        console.log(userData)
        state.users.push(userData)
    },

    updateUser: (state, payload) => {
        console.log(payload.user);
        console.log('payload.company_name: ', payload.user.username);
        const users = state.users.find(p => p.users_code === payload.user.users_code)
        users.username = payload.user.username
        users.role_name = payload.user.role_name

    },

    addInventory: (state, inventoryData) => {
        console.log(inventoryData)
        state.inventoryList.push(inventoryData)
    },

    updateInventory: (state, payload) => {
        console.log(payload.inventory);
        console.log('payload.inventory: ', payload.inventory.product_description);
        const inventory = state.inventoryList.find(p => p.barcode === payload.inventory.barcode)
        inventory.product_description = payload.inventory.product_description
    },

    addDeliveryTransaction(state, dt_data){
        state.delivery_transactions.push(dt_data)
    },
    
    addDeliveryTransaction_items(state, dt_items) {
        state.delivery_transactions_items.push(dt_items)
    },

    viewSalesTransaction(state, transaction){
        console.log('mutations.js viewSalesTransaction ', transaction);
        state.selectedTransaction = transaction;
    },

    viewSelectedItem(state, item) {

        const product = state.inventoryList.find(p => p.barcode == item)

        console.log('mutations.js viewSelectedItem', product);
        state.selectedItem = product
        return product
    },
    
    














// export default {
//     addCustomer: (state, customerData) => {
//         console.log(customerData)
//         state.customers.push(customerData)
//     },

//     addSupplier: (state, supplierData) => {
//         console.log(supplierData)
//         state.suppliersList.push(supplierData)
//     },

//     addSales: (state, salesData) => {
//         console.log(salesData)
//         state.salesList.push(salesData)
//     },

//     addDelivery: (state, deliveryData) => {
//         console.log(deliveryData)
//         state.push(deliveryData)
//     },


//     addInventory: (state, inventoryData) => {
//         console.log(inventoryData)
//         state.push(inventoryData)
//     },

//     addSelectedTransaction: (state, transaction) => {
//         state.selectedTransaction = transaction;
//     },

//     addSelectedDelivery: (state, dr_no) => {
//         state.selectedDelivery = dr_no;
//     },

//     // addSelectedDelivery: (state, delivery) => {
//     //     state.selectedDelivery = delivery;
//     // }


//     // =======================================================

    setRolesList(state, data){
        state.rolesList = data;
    },

//     addRole(state, role_name){
//         //console.log('hehe',role_name)
//         state.rolesList.unshift(role_name)
//     },

//     updateRole(state, data){
//         console.log('@mutation: ', data)
//         const role = state.rolesList.find(find => find.role_code === data.role_code)
//         role.role_name = data.role_name
//     },




    setUserList(state, data){
        state.userList = data;
    },

//     addUser(state, data){
//         console.log('@mutation: ',data);
//         state.userList.push(data)
//     },

//     addSelectedRole(state, role) {
//         console.log('@here: ',role)
//         state.selectedRole = role;
//     },





    setInventoryList(state, data){
        state.inventoryList = data;
    },

    setSuppliersList(state, data){
        state.suppliersList = data;
    },

//     addSupplier(state, data){
//         console.log('@mutation: ',data);
//         state.suppliersList.push(data)
//     },

//     updateSupplier(state, data){
//         console.log('@mutation: ', data)
//         const supplier = state.suppliersList.find(find => find.supplier_id === data.supplier_id)
//         supplier.
//     },




//     updateInventory(state, data){
//         console.log('@mutation: ', data)
//         const index = state.inventoryList.findIndex(
//             inventoryList => {
//                 inventoryList.inventory_code = data.inventory_code
//             }
//         )
//     },



    setDTransactionsList(state, data) {
        state.deliveryList = data;
    },










    setSTransactionsList(state, data) {
        state.salesList = data;
    }
}