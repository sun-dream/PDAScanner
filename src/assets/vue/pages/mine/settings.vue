<template lang="html">
    <f7-page>


        <!-- Nav  -->
        <f7-navbar title="偏好设置" back-link="Back"></f7-navbar>


        <!-- list -->
        <f7-list>
            <f7-list-item link="/modifypsd/" title="修改密码"></f7-list-item>
            <f7-list-item @click='logoutpop' title="退出登录"></f7-list-item>
        </f7-list>


        <!-- Actions -->
        <f7-actions :opened='show'>
            <!-- Actions Group -->
            <f7-actions-group>
                <!-- Actions Label -->
                <!-- <f7-actions-label>退出</f7-actions-label> -->
                <!-- Actions Buttons -->
                <f7-actions-button @click="logout">退出登录</f7-actions-button>
            </f7-actions-group>
            <!-- Another Group -->
            <f7-actions-group>
                <!-- Cancel/Close Button -->
                <f7-actions-button @click="cancel" color="red" bold>取消</f7-actions-button>
            </f7-actions-group>
        </f7-actions>


    </f7-page>
</template>

<script>
export default {

    data(){
        return{
            show:false,
        }
    },


    methods:{
        logoutpop(){
            console.log('logoutpop');
            this.show = true;
            console.log(this.show);
        },

        logout(){
            console.log('logout');
            this.show = false;
            this.$f7router.navigate('/login/', {"animate":false});
        },

        cancel(){
            console.log('cancel');
            this.show = false;
            console.log(this.show);
        }




    }

}
</script>

<style lang="css">
</style>
