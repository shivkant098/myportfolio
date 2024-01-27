import React, { useEffect, useState } from "react";
import axios from "axios";
import CalendarHeatmap from "react-calendar-heatmap";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoadingCard from "./Loading";

function Leetcode() {
  const { profile } = useParams();
  const [newS, setNew] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState("2022/01/01");
  const [endDate, setEndDate] = useState(new Date());
  const [leetcode, setLeetcode] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getDataFromSearch = async () => {
      try {
        const user = {
          profile: profile,
        };

        const data = await axios.post(`${import.meta.env.VITE_API}/user`, user);
        const profileName = data.data.name;
        setUsername(profileName);
        const UserLeetcode = data.data.leetcode;
        setLeetcode(UserLeetcode);

        getDataFromLeetCode(UserLeetcode);
      } catch (error) {
        console.error(error);
      }
    };

    const getDataFromLeetCode = async (leetcodeProfilrUrl) => {
      try {
        const value = await axios.get(
          `${import.meta.env.VITE_LEETCODE}/${leetcodeProfilrUrl}`
        );

        if (value) {
          setNew([]);
          const realdata = [];

          for (let property in value.data.submissionCalendar) {
            var myDate = new Date(`${property}` * 1000)
              .toISOString()
              .replace("-", "/")
              .split("T")[0]
              .replace("-", "/");

            realdata.push({ date: `${myDate}`, count: `${value.data.submissionCalendar[property]}` });
          }

          setNew(realdata);
          setLoading(false);
        } else {
          console.log("Please Try Again");
        }
      } catch (error) {
        console.error(error);
      }
    };

    getDataFromSearch();
  }, [profile]);

  return (
    <>
      <div className="min-h-screen text-lg">
        <div className="text-six">
          <div className="details">
            <h2 className="text-xl change leading-tight text-white-900">
              <span className="mdi mdi-account-check blue-500"></span>{" "}
              <span className="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline text-yellow-600 rounded">
                {username.toUpperCase()}
              </span>
            </h2>
          </div>

          <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 change md:text-4xl text-white text-center ">
            Leetcode{" "}
            <span className="text-yellow-600 dark:text-yellow-600">Heatmap </span>
            <a target="blank" href={`https://leetcode.com/${leetcode}`}>
              <span className="mdi mdi-link-variant"></span>
            </a>
          </h1>
          <div className="mb-10">
            {!loading ? (
              <CalendarHeatmap
                class="calS "
                startDate={startDate}
                endDate={endDate}
                values={newS}
                onMouseOver={(event, value) => {
                  // Handle tooltip or any other interactions here
                }}
                onMouseLeave={() => {
                  // Handle leaving the heatmap
                }}
                classForValue={(value) => {
                  if (!value) {
                    return "color-scale-0";
                  } else if (value.count == 1) {
                    return `color-scale-1`;
                  } else if (value.count == 2) {
                    return `color-scale-2`;
                  } else if (value.count == 3) {
                    return `color-scale-3`;
                  } else if (value.count >= 4) {
                    return `color-scale-4`;
                  }
                }}
                gutterSize={3}
              />
            ) : (
              <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 change md:text-4xl text-white text-center ">
                <LoadingCard class="text-six" count={2} />
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Leetcode;
