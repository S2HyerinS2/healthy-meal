import React, { useState, useEffect } from 'react'
import MealCard from '../component/MealCard';

function Meals() {
  const [keyword, setKeyword] = useState('');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
      fetch(`${import.meta.env.BASE_URL}db.json`)
        //github 연결 시에는 작성 필요
        //절대경로 선언, vite.config.js의 base 경로 기준
  
        .then((response) => response.json())
        .then((data) => {setMeals(data.meals || {})
        }).catch((error) => console.log('식단 데이터 로드 실패', error))
    }, [])

    const filteredMeals = meals.filter((meal) => meal.title.includes(keyword))

  return (
    <div className="contents">
      <section>
        <h2>식단관리</h2>
        <p className="page-desc">
          메뉴 이름을 검색하고 건강한 한 끼 아이디어를 찾아보세요.
        </p>
        <input
          type="text"
          className='search-input'
          placeholder='예: 연어, 샐러드'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          />
          {/* onChange event 발생 => setKeyword가 (input 창의 데이터가 변화됨을 감지 => 변화된 데이터를 keyword로 저장 */}

        <p className="result-content">
          검색 결과 {filteredMeals.length}개
        </p>
        <div className="card-grid">
          {filteredMeals.map((item) => <MealCard key={item.id} item={item} />)
          }
        </div>
      </section>
    </div>
  )
}

export default Meals