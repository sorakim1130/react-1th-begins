import styled from "@emotion/styled";
import { useState } from "react";

//NOTE: 제어/비제어 컴포넌트
const TodoForm = ({ setTodos }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    if (!title.trim() || !content.trim())
      return alert("제목과 내용을 입력해주세요.");

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    // useState 비ㅣ동기성으로 인해 setTodos가 끝나고 나서 setTodos를 호출해야함
    setTodos((prev) => [nextTodo, ...prev]);

    e.target.reset();
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder={"제목"} name="title" />
        <input type="text" placeholder={"내용"} name="content" />
        <button type="submit">등록</button>
      </form>
    </Container>
  );
};

const Container = styled.div``;

export default TodoForm;
