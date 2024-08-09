import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const TodoList = () => {
  const itemsLists = useSelector((store) => store.itemsList);
  const dispatch = useDispatch();

  const handleDelete =(val) =>{
    dispatch({type:"DELETE_ITEM" , payload:val})
  }
  return (
    <>
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-7 col-lg-8">
            <h3>List Items</h3>
            <ul class="list-group list-group-flush ">
              {itemsLists.map((val) => {
                return (
                  <li class="list-group-item d-flex  justify-content-between">
                    {val} <button class="btn btn-danger" onClick={()=>handleDelete(val)}>Delete</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
