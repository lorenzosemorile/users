import caret from "../assets/caret.svg";
import {useEffect, useRef, useState} from 'react';

const genders = [
  {
    'id' : 'male',
    'label' : 'Male'
  },
  {
    'id' : 'female',
    'label' : 'Female'
  }
]


export const GenderList = ({onGenderChange}) => {

  const [gender, setGender] = useState(null);

  const genderListRef = useRef();
  const genderListClickHandler = () => {
    const display = genderListRef.current.style.display
    const show = display === 'block' ? 'none' : 'block';
    genderListRef.current.style.display = show;
  }

  useEffect(() => {
    if (!gender) return;
    onGenderChange(gender);
  }, [gender])

  return (
    <div className="toolbar__select" onClick={genderListClickHandler}>
      <span className="toolbar__select__label">Sorted by gender</span>
      <span className="toolbar__select__current">Gender</span>
      <img className="toolbar__select__caret" src={caret} alt="caret"/>
      <div
        ref={genderListRef}
        className="toolbar__gender__list">
        <ul>
          {genders.map(gender => {
            return (
              <li
                key={gender.id}
                onClick={() => setGender(gender)}
              >
                {gender.label}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}