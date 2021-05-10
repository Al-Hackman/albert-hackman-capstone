// import React from "react";
import ReactDOM from "react-dom";
import firebaseDb from 'firebase'
import CRUDTable, { Fields, Field, CreateForm, UpdateForm, DeleteForm } from "react-crud-table";
// import React, { useRef } from 'react';
import './addCategory.scss'
import React, { useRef, useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import CategoryList from '../CategoryList/CategoryList';


function AddCategory(props) {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [showModal, setShowModal] = useState(true);



    function showModall() {
    // event.preventDefault();
    setShowModal(false);
    // <CategoryList />
     };


    const handleAddCategory = (e) => {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            // setShowModal(true)
            // signup(emailRef.current.value, passwordRef.current.value, lastNameRef.current.value, otherNamesRef.current.value, telephoneRef.current.value)
            firebaseDb.database().ref('serviceCategories/').push({
                title: titleRef.current.value,
                description: descriptionRef.current.value
            }).then(task=>{
                    setShowModal(false);
                    history.push("/app/categories")
                    console.log('task details added', task)
                }).catch(err => {{
                    console.log('task details err', err)
                }})
            // history.push("/app/categories")
            
        } catch {
            setError('Failed to create an Account')
        } 

        // setLoading(false);    
        
        setShowModal(false);
        // showModall();
        props.history.push();
    }
    

    return (
        
        <section className="addCat">
            {!showModal ? <CategoryList /> : null} 
            <div className="addCat__wrap">
                <h1 className="addCat__title">Add Category</h1>
                <div className="addCat__form-wrap">
                    <form onSubmit={handleAddCategory} className= "addCat__form" encType="multipart/form-data">
                        <h4 className="addCat__error-message">{error}</h4>
                        <div className="addCat__display-wrap">
                            <div className="addCat__input-wrap">
                                <label className="addCat__label">Title</label>
                                <input type="text" className="addCat__input" ref={titleRef} placeholder="Title"/>
                            </div>
                            <div className="addCat__input-wrap">
                                <label className="addCat__label">Description</label>
                                <textarea rows="3" className="addCat__textarea" ref={descriptionRef} placeholder="Description"></textarea>
                            </div>
                        </div>
                        
                        <button className="addCat__btn" type="submit" value="Submit" disabled={loading}>ADD CATEGORY</button>
                        {/* <button className="sign-up__cancel" type="reset" value="Reset">CANCEL</button> */}
                    </form>
                </div>
            </div>
        </section>
    )
}


export default AddCategory;


// const DescriptionRenderer = ({ field }) => <textarea {...field} />;

// let tasks = [
//   {
//     id: 1,
//     title: "Create an example",
//     description: "Create an example of how to use the component"

//   },
//   {
//     id: 2,
//     title: "Improve",
//     description: "Improve the component!"
//   }
// ];

// const SORTERS = {
//   NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
//   NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
//   STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
//   STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a))
// };

// const getSorter = data => {
//   const mapper = x => x[data.field];
//   let sorter = SORTERS.STRING_ASCENDING(mapper);

//   if (data.field === "id") {
//     sorter =
//       data.direction === "ascending"
//         ? SORTERS.NUMBER_ASCENDING(mapper)
//         : SORTERS.NUMBER_DESCENDING(mapper);
//   } else {
//     sorter =
//       data.direction === "ascending"
//         ? SORTERS.STRING_ASCENDING(mapper)
//         : SORTERS.STRING_DESCENDING(mapper);
//   }

//   return sorter;
// };




// let count = tasks.length;
// const service = {
//   fetchItems: payload => {
//     let result = Array.from(tasks);
//     result = result.sort(getSorter(payload.sort));
//     return Promise.resolve(result);
//   },
//   create: task => {
//       firebaseDb.database().ref('serviceCategories/').set({
//           title: titleRef.current.value,
//           description: descriptionRef.current.value
//       }).then(task=>{
//             console.log('task details added', task)
//         }).catch(err => {{
//             console.log('task details err', err)
//         }})
//     //   firebaseDb.database.child('serviceCategories').push(
//     //       tasks,
//     //       err => {
//     //           if(err){
//     //               console.log('err adding', err)
//     //           }
//     //       }
//     //   )
//     // count += 1;
//     // tasks.push({
//     //   ...task,
//     //   id: count
//     // });
//     return Promise.resolve(task);
//   },
//   update: data => {
//     const task = tasks.find(t => t.id === data.id);
//     task.title = data.title;
//     task.description = data.description;
//     return Promise.resolve(task);
//   },
//   delete: data => {
//     const task = tasks.find(t => t.id === data.id);
//     tasks = tasks.filter(t => t.id !== task.id);
//     return Promise.resolve(task);
//   }
// };

// const styles = {
//   container: { margin: "auto", width: "fit-content" }
// };




// const CategoryList = () => (



//   <div style={styles.container}>
//     <CRUDTable
//       caption="Tasks"
//       fetchItems={payload => service.fetchItems(payload)}
//     >
//       <Fields>
//         <Field name="id" label="Id" hideInCreateForm />
//         <Field name="title" ref={titleRef} label="Title" placeholder="Title" />
//         <Field
//           name="description"
//           ref={descriptionRef}
//           label="Description"
//           render={DescriptionRenderer}
//         />
//       </Fields>
//       <CreateForm
//         title="Task Creation"
//         message="Create a new task!"
//         trigger="Create Task"
//         onSubmit={task => service.create(task)}
//         submitText="Create"
//         validate={values => {
//           const errors = {};
//           if (!values.title) {
//             errors.title = "Please, provide task's title";
//           }

//           if (!values.description) {
//             errors.description = "Please, provide task's description";
//           }

//           return errors;
//         }}
//       />

//       <UpdateForm
//         title="Task Update Process"
//         message="Update task"
//         trigger="Update"
//         onSubmit={task => service.update(task)}
//         submitText="Update"
//         validate={values => {
//           const errors = {};

//           if (!values.id) {
//             errors.id = "Please, provide id";
//           }

//           if (!values.title) {
//             errors.title = "Please, provide task's title";
//           }

//           if (!values.description) {
//             errors.description = "Please, provide task's description";
//           }

//           return errors;
//         }}
//       />

//       <DeleteForm
//         title="Task Delete Process"
//         message="Are you sure you want to delete the task?"
//         trigger="Delete"
//         onSubmit={task => service.delete(task)}
//         submitText="Delete"
//         validate={values => {
//           const errors = {};
//           if (!values.id) {
//             errors.id = "Please, provide id";
//           }
//           return errors;
//         }}
//       />
//     </CRUDTable>
//   </div>
// );

// CategoryList.propTypes = {};

// ReactDOM.render(<CategoryList />, document.getElementById("root"));



