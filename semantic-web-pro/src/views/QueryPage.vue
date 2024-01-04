<template>
    <div class="container-query">
        <div class="content">
            <h1>Semantic web</h1>
            <textarea class="input-query" v-model="query" placeholder="Truy vấn">

            </textarea>
            <div class="btn" @click="excuteQuery">
               Excute Query
            </div>
            <table>
                <thead>
                    <tr>
                    <th scope="col" v-for="(header, index) in headers" :key="index">{{ header  }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in rows" :key="index">
                      <td class="cell" data-label="Account" v-for="(header, ind) in headers" :key="ind">{{ row[header] ? row[header].value: '' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import {  ref } from "vue";
import { queryData } from '../services/film'


export default {
setup() {
    const query = ref('')
    const headers = ref([])
    const rows = ref([])
    async function excuteQuery() {
        const response = await queryData(query.value)
        if (response.head.vars) {
            this.headers = response.head.vars
        }
        if (response.results.bindings) {
           this.rows = response.results.bindings
        }
    }
    return {
        headers,
        query,
        rows,
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
.data-query {
    margin-top: 10px;
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
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}














/* general styling */
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}
.cell {
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>