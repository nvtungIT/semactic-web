<template>
    <div class="container-query">
        <div class="content">
            <h1>Semantic web</h1>
            <textarea class="input-query" v-model="query">

            </textarea>
            <div class="btn" @click="excuteQuery">
               Excute Query
            </div>
            <textarea  class="input-query" v-model="dataQuery">
            </textarea>
        </div>
    </div>
</template>
<script>
import {  ref } from "vue";
import { queryData } from '../services/film'


export default {
setup() {
    const query = ref('')
    const dataQuery = ref('')
    async function excuteQuery() {
        const response = await queryData(query.value)
        dataQuery.value = JSON.stringify(response.results.bindings, null, 2)
    }
    return {
        query,
        dataQuery,
        excuteQuery
    }
}
}
</script>
<style scoped>
.container-query {
    background-color: white;
    height: 100%;
    padding: 40px;
}
.content {
    background-color: aliceblue;
    height: 100%;
}
.input-query {
    height: 250px;
    width: 100%;
    border-radius: 8px;
    padding: 10px;
}
.btn {
    padding: 8px;
    width: fit-content;
    max-width: 200px;
    background-color: bisque;
    border-radius: 8px;
    cursor: pointer;
}
.btn:hover {
    background-color: aqua;
}
</style>