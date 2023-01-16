
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Searchbar() {
    return (
      <div className="flex">
          <select className="border border-gray-300 rounded-md">
              <option>全てのカテゴリ</option>
              <option>サンプルカテゴリ</option>
              <option>Food</option>
              <option>同梱物</option>
              <option>Image</option>
              <option>GAMING</option>
          </select>
          <div className="ml-4">
              <div className="flex">
                
                <input type="text"  className="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80" placeholder="検索ワードを入れてください..." />
                <button className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
          </div>
      </div>
    );
  }