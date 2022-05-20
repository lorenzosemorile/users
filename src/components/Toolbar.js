import {GenderList} from "./GenderList";

export const Toolbar = ({total, onGenderChange}) => {

  return (
    <div className="toolbar">
      <div className="toolbar__heading">
        <div className="toolbar__title">Users</div>
        <div className="toolbar__count">{total} results are found</div>
      </div>
      <GenderList onGenderChange={onGenderChange} />
    </div>
  )

}