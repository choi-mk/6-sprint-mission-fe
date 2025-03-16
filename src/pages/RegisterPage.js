import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import Tag from "../components/Tag";
import { useState } from "react";
import { useValidation } from "../hooks/Validation";

console.log(styles);

function RegisterPage() {
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPriceInput] = useState();
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const { isValid, setIsValid } = useValidation();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e, name) => {
    if (name === "name") {
      setNameInput(e.target.value);
    } else if (name === "description") {
      setDescriptionInput(e.target.value);
    } else if (name === "price") {
      setPriceInput(e.target.value);
    } else if (name === "tag") {
      setTagInput(e.target.value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleSubmit = () => {
    if (nameInput !== "" && descriptionInput !== "" && priceInput !== "") {
      setIsSubmit(false);
    }
  };

  const handleClickDelete = (t) => {
    setTags(tags.filter((tag) => tag !== t));
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.title}>상품 등록하기</p>
        <Link
          className={
            isSubmit
              ? styles["register-button"]
              : styles["register-button-disabled"]
          }
          to="/items"
        >
          등록
        </Link>
      </div>
      <form onSubmit={handleSubmit} className={styles["input-container"]}>
        <div className={styles.name}>
          <label className={styles["sub-title"]}>상품명</label>
          <input
            className={styles["input-name"]}
            placeholder="상품명을 입력해주세요"
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <div className={styles.description}>
          <label className={styles["sub-title"]}>상품 소개</label>
          <input
            className={styles["input-description"]}
            placeholder="상품 소개를 입력해주세요"
            onChange={(e) => handleChange(e, "description")}
          />
        </div>
        <div className={styles.price}>
          <label className={styles["sub-title"]}>판매가격</label>
          <input
            className={styles["input-price"]}
            placeholder="판매가격을 입력해주세요"
            onChange={(e) => handleChange(e, "price")}
          />
        </div>
        <div className={styles.tag}>
          <label className={styles["sub-title"]}>태그</label>
          <input
            onChange={(e) => handleChange(e, "tag")}
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
