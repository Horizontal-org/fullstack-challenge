import * as React from 'react';

import { useNavigate } from 'react-router';

import { useApiReducer } from '../../api/api';
import Col from '../../component/Col/index.style';
import Row from '../../component/Col/index.style';
import debounce from '../../util/debounce';

import Search from '../../component/Search';
import UserCard from './components/ImageCard';
import { ResultCol, SearchRow, UserDetailLink } from './index.style.jsx';
const Home = () => {
  const history = useNavigate();

  const [searchKey, setSearchKey] = React.useState('apollo 11');
  const { data, loading } = useApiReducer(`https://images-api.nasa.gov/search?q=${searchKey}`);

  const debouncedSearch = React.useCallback(
    debounce((text) => {
      setSearchKey(text);
    }, 3000),
    [searchKey, setSearchKey],
  );

  return (
    <>
      <SearchRow>
        <Col xs={22} sm={22} md={22} lg={22} xl={22} xxl={22}>
          <Search
            disabled={loading}
            value={searchKey}
            placeHolder={'Search Placeholder'}
            onChange={(text) => {
              if (!!text) {
                setSearchKey(text);
                debouncedSearch(text);
              } else {
                setSearchKey(text);
              }
            }}
          />
        </Col>
      </SearchRow>
      <Row justify="center">
        <ResultCol span={24}>
          <Row justify="center">
            {data?.collection?.items && data?.collection?.items.length === 0 && (
              <Col xs={22} sm={22} md={8} lg={8} xl={6} xxl={5}>
                Not Found
              </Col>
            )}

            {data?.collection?.items &&
              data?.collection?.items
                .slice(0, 25)
                .filter((item) => {
                  return Array.isArray(item.links) && item?.links?.length === 2;
                })
                .map((item) => (
                  <Col tabIndex={item?.id + 1} key={item?.id} xs={22} sm={22} md={22} lg={22} xl={22} xxl={5}>
                    <UserDetailLink
                      onClick={async () => {
                        await fetch('http://localhost:4000/file', {
                          method: 'POST',

                          body: JSON.stringify({
                            name: item.links[0].href,
                          }), // body data type must match "Content-Type" header
                        });
                      }}
                    >
                      <UserCard user={item} />
                    </UserDetailLink>
                  </Col>
                ))}
          </Row>
        </ResultCol>
      </Row>
    </>
  );
};

export default Home;
