<template>
    <section>
         <h3>Añadir Profesor</h3>
         <div><label>Nombre:</label> <input type="text" v-model="teacher.teacherName"/></div>
         <br>
         <div><label>Apellidos:</label> <input type="text" v-model="teacher.surname"/></div>
         <br>
         <div><label>DNI / NIF:</label> <input type="text" v-model="teacher.dni"/></div>
         <br>
         <div><label>Materias:</label> <input type="text" v-model="subjects" /> <button @click="handleSubject">Agregar</button></div>
         <br>
         <div>
            <ul>
                <li v-for="(elm, index) in teacher.subjects" :key="index">{{ elm }}</li>
            </ul>
         </div>
         <input type="checkbox" v-model="teacher.doc"/>Documentacion Entregada
         <button @click="handleAddTeacher">Agregar</button>
    </section>
 
    <section>
         <h3>Listado de profesores</h3>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>DNI / NIF</th>
                <th>Materias</th>
                <th>Documentacion Entregada</th>
            </tr>
            <tr v-for="elm in teachers" :key="elm.dni">
                <th>{{ elm.teacherName }}</th>
                <th>{{ elm.surname }}</th>
                <th>{{ elm.dni }}</th>
                <th>
                    <ul>
                        <li v-for="(item, index) in elm.subjects" :key="index">{{ item }}</li>   
                    </ul>
                </th>
               
                <th v-if="elm.doc">Entregada</th>
                <th v-else>No Entregada</th>
                <button>Atualizar</button>
                <button>Eliminar</button>
            </tr>
                
        </table>
    </section>
 </template>
 
 <script lang="ts" setup>
    import { Ref, ref } from 'vue'

    interface ITeacher {
        teacherName: string,
        surname: string,
        dni: string,
        subjects: Array<string>,
        doc:boolean
    }

    let teacher:Ref<ITeacher> = ref({
       
        teacherName: '',
        surname: '',
        dni: '',
        subjects: [],
        doc: false
    })

    let teachers:Ref<Array<ITeacher>> = ref([])

    let subjects:Ref<string> = ref('')

    const handleSubject = () => {
        teacher.value.subjects.push(subjects.value)
        subjects.value = ""
    }

    const handleAddTeacher = () => {

        teachers.value.push({
            teacherName:  teacher.value.teacherName,
            surname:  teacher.value.surname,
            dni: teacher.value.dni ,
            subjects: teacher.value.subjects ,
            doc: teacher.value.doc 
        })
        teacher.value.teacherName = ""
        teacher.value.surname = ""
        teacher.value.dni = ""
        teacher.value.subjects = []
        teacher.value.doc = false
    }



 </script>
 
 <style scoped>
 </style>