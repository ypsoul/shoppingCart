const state = {
    shop_list:[
        {
            id:11,
            name:'鱼香肉丝',
            price:12
        },
        {
            id:22,
            name:'宫保鸡丁',
            price:14
        },
        {
            id:33,
            name:'土豆丝',
            price:12,
        },
        {
            id:44,
            name:'米饭',
            price:2,
        }
    ],
    added:[]
}

const getters = {
    // 商品列表
    // shoplist:function(state){
    //     return state.shop_list
    // }
    shoplist:state => state.shop_list,
    //购物车列表
    cartProducts:state =>{
        return state.added.map(({id,num}) =>{
            let product = state.shop_list.find(n => n.id == id)
            return{
                ...product,
                num
            }
        })
    },
    //计算总价
    totalPrice:(state,getters) => {
        let total = 0;
        getters.cartProducts.forEach(item => {
            total+=item.price * item.num
        });
        return total
    },
    //计算总属性
    totalNum:(state,getters)=>{
        let total = 0;
        getters.cartProducts.forEach( item=>{
            total += item.num
        })
        return total
    }
}

const actions = {
    //加入购物车
    addToCart({commit},product){
        commit('ADDTOCART',{
            id:product.id
        })
    },
    //清空
    clearAll({commit}){
        commit('CLEAR')
    },
    //删除购物车
    delProduct({commit},product){
        commit('DELETE',{
            id:product.id
        })
    },
    // 数量 -1
    sub({commit},product){
        commit('SUB',{
            id:product.id
        })
    },
    // 数量 +1
    plus({commit},product){
        commit('PLUS',{
            id:product.id
        })
    }
}

const mutations = {
    //
    ADDTOCART(state,{id}){
        let record = state.added.find( n => n.id == id);
        if(!record){
            state.added.push({
                id,
                num:1
            })
        }else{
            record.num++
        }
    },
    //清空
    CLEAR(state){
        state.added=[]
    },
    //删除当前
    DELETE(state,{id}){
        state.added.forEach((item,i) =>{
            if(item.id ==id){
                state.added.splice(i,1)
            }
        })
    },
    // -1
    SUB(state,{id}){
        state.added.forEach((item,index )=> {
            if(item.id==id&&item.num<2){
                state.added.splice(index,1)
            }else if(item.id == id&&item.num>1){
                item.num--
            }
        });
    },
    // +1
    PLUS(state,{id}){
        state.added.forEach(item=>{
            if(item.id == id){
                item.num++
            }
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}