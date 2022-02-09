import { FC, useState, useEffect, MouseEvent } from "react";
import styles from "./index.module.scss";
import { getQualsData, postQualsData } from "@/components/hooks/Api/firebase";

type documents = {
  documents: [];
};

const TestComponent: FC = () => {
  console.log("renderingしました!!!!!!!!!!!");
  useEffect(() => {
    const getData = async () => {
      const result = await getQualsData();
      setData(result);
    };
    getData();
  }, []);

  const [data, setData] = useState<documents>();

  const postData = {
    title: { stringValue: "Hello Nextjs" },
    comment: { stringValue: "Hello Firebase" },
    isDone: { booleanValue: true },
    isPass: { booleanValue: true },
  };

  const handleClickPost = () => {
    postQualsData(postData);
  };
  return (
    <div className={styles["user-component"]}>
      <div className={styles["post"]}>
        <button onClick={() => handleClickPost()}>POST</button>
      </div>
      <div className={styles["dialog"]}>
        {data?.documents.map((item, i) => (
          <li key={i}>
            <p>{item.fields.comment.stringValue}</p>
            <p>{item.fields.title.stringValue}</p>
            <p>{item.fields.isDone.booleanValue}</p>
            <p>{item.fields.isPass.booleanValue}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TestComponent;
