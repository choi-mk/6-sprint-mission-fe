import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import Tag from "../components/Tag";
import { useState } from "react";

console.log(styles);

function RegisterPage() {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleChangeTag = (e) => {
    setTagInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleSubmit = () => {};

  const handleClickDelete = (t) => {
    setTags(tags.filter((tag) => tag !== t));
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.title}>상품 등록하기</p>
        <Link className={styles["register-button"]} to="/items">
          등록
        </Link>
      </div>
      <form onSubmit={handleSubmit} className={styles["input-container"]}>
        <div className={styles.name}>
          <label className={styles["sub-title"]}>상품명</label>
          <input
            className={styles["input-name"]}
            placeholder="상품명을 입력해주세요"
          />
        </div>
        <div className={styles.description}>
          <label className={styles["sub-title"]}>상품 소개</label>
          <input
            className={styles["input-description"]}
            placeholder="상품 소개를 입력해주세요"
          />
        </div>
        <div className={styles.price}>
          <label className={styles["sub-title"]}>판매가격</label>
          <input
            className={styles["input-price"]}
            type="number"
            placeholder="판매가격을 입력해주세요"
          />
        </div>
        <div className={styles.tag}>
          <label className={styles["sub-title"]}>태그</label>
          <input
            onChange={handleChangeTag}
            className={styles["input-tag"]}
            placeholder="태그를 입력해주세요"
            value={tagInput}
            onKeyDown={handleKeyDown}
          />
          <div>
            {tags.map((tag, index) => (
              <Tag
                key={index}
                tag={tag}
                handleClickDelete={handleClickDelete}
              ></Tag>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
