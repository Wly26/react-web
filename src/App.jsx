// 创建“外壳”组件app
import React from "react";

// 路由
import { NavLink, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { useLocation } from "react-router-dom";
import "./App.css";

import  Footer  from "./components/Footer";


// 创建并暴露app组件
export default function App() {
  //获取当前页面的路由
  const location = useLocation();

  return (
    <div>
      {/* grid grid-rows-[auto_1fr] */}
      <div className="min-h-screen relative">
        {/* 导航 */}
        <div
          className="grid grid-cols-12 h-10 md:h-20 bg-green-800 fixed w-full"
          style={{
            zIndex: 50,
          }}
        >
          <div className="col-span-0 md:col-span-2"></div>
          <div className="col-span-12 md:col-span-8">
            <div className="flex h-full">
              <div className="w-1/4 inline-block">
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center justify-center h-full w-full text-white ${
                      isActive ? " border-b-2 font-bold" : ""
                    } hover:bg-green-700 transition-colors duration-200`
                  }
                  to="/home"
                >
                  首页
                </NavLink>
              </div>
              <div className="w-1/4 inline-block">
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center justify-center h-full w-full text-white ${
                      isActive ? " border-b-2 font-bold" : ""
                    } hover:bg-green-700 transition-colors duration-200`
                  }
                  to="/artwork"
                >
                  手绘
                </NavLink>
              </div>
              <div className="w-1/4 inline-block">
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center justify-center h-full w-full text-white ${
                      isActive ? " border-b-2 font-bold" : ""
                    } hover:bg-green-700 transition-colors duration-200`
                  }
                  to="/threeDModel"
                >
                  建模
                </NavLink>
              </div>
              <div className="w-1/4 inline-block">
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center justify-center h-full w-full text-white ${
                      isActive ? " border-b-2 font-bold" : ""
                    } hover:bg-green-700 transition-colors duration-200`
                  }
                  to="/twoDAnimation"
                >
                  动画
                </NavLink>
              </div>
              {/* <div className="w-1/5 inline-block">
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center justify-center h-full w-full text-white ${
                      isActive ? "border-b-2 font-bold" : ""
                    } hover:bg-green-700 transition-colors duration-200`
                  }
                  to="/notes"
                >
                  笔记
                </NavLink>
              </div> */}
            </div>
          </div>
          <div className="col-span-0 md:col-span-2"></div>
        </div>
        {/* 内容 */}
        <div className="bg-white">
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Routes>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </div>
            </div>
          </div>
        </div>
        {/* 页脚 */}
        {location.pathname !== "/home" && (
          <div className="grid grid-cols-1 h-40 w-full bg-green-800 ">
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}
