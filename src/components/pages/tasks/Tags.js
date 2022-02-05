import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../..";

const Tags = observer(() => {
  const { tasksStore } = useContext(Context);

  const [tagsState, setTagsState] = useState(tasksStore.tags);

  useEffect(() => {
    tasksStore.setTags(tagsState);
  }, [tagsState]);

  const addTag = () => {
    setTagsState([
      ...tagsState,
      { selected: false, name: "Lol", type: tasksStore.selectedType },
    ]);
  };

  const toggleTag = (index) => {
    const newTasks = [...tagsState];
    newTasks[index].selected = !newTasks[index].selected;
    setTagsState(newTasks);
  };

  const removeTag = (index) => {
    const newTasks = [...tagsState];
    newTasks.splice(index, 1);
    setTagsState(newTasks);
  };

  return (
    <div className="tags">
      <div className="selected_type">
        <div className="image">
          <img src={tasksStore.selectedType} alt="/s" className="icon" />
        </div>
      </div>
      <div className="wrapper">
        {tasksStore.tags.map(({ selected, name, type }, index) =>
          tasksStore.selectedType == type ? (
            <div key={index} className={`tag_wrap ${selected && "selected"}`}>
              <div onClick={() => toggleTag(index)} className="tag">
                {name}
              </div>
              <div onClick={() => removeTag(index)} className="xmark" />
            </div>
          ) : null
        )}
        <div onClick={() => addTag()} className="add_tag">
          Add tag
        </div>
      </div>
    </div>
  );
});

export default Tags;
