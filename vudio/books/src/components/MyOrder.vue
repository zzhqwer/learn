<template>
    <div>
        <table cellspacing = "0">
            <thead>
                <tr>
                    <th>书籍名称</th>
                    <th>购买数量</th>
                    <th>适用校区</th>
                    <th>总价</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td v-for="(item,index) in params" :key="index">{{ item }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            params: Array,
        }
    }
</script>

<style scoped>
  table{
    width: 500px;
    height: 80px;
    border-left:solid 1px #ccc ;
    border-top:solid 1px #ccc ;
  }
  table tr th,td{
    border-right:solid 1px #ccc ;
    border-bottom:solid 1px #ccc ;
  }
</style>
