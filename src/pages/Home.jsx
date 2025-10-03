import React, { useRef, useEffect } from "react";
import { Carousel } from "antd";

export default function Home() {
  
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    // 监听滚轮事件
    const handleWheel = (e) => {
      e.preventDefault();

      // 如果正在滚动，则忽略新的滚动事件
      if (isScrollingRef.current) return;

      if (!containerRef.current || sectionsRef.current.length === 0) return;

      const delta = e.deltaY;
      const container = containerRef.current;
      const scrollPosition = container.scrollTop;

      let targetSection = null;

      if (delta > 0) {
        // Scroll down - 查找下一个完整的section
        targetSection = sectionsRef.current.find((section) => {
          if (!section) return false;
          const sectionTop = section.offsetTop;
          return sectionTop > scrollPosition + 5;
        });
      } else {
        // Scroll up - 查找上一个完整的section
        // 从当前视口最接近顶部的section开始查找
        const currentSectionIndex = sectionsRef.current.findIndex((section) => {
          if (!section) return false;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          return (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          );
        });

        // 如果找到了当前section，目标应该是它之前的section
        if (currentSectionIndex > 0) {
          targetSection = sectionsRef.current[currentSectionIndex - 1];
        }
      }

      if (targetSection) {
        isScrollingRef.current = true;
        container.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });

        // 在滚动完成后重置标志
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000); // 与scroll动画时间匹配
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <div ref={containerRef} style={{ height: "100vh", overflow: "hidden" }}>
      {/* 介绍 */}
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url('/main/indexfrist.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            flex: "9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              color: "white",
            }}
          >
            欢迎来到我的个人空间
          </h3>
        </div>

        <div
          style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <div>
            <h6
              style={{
                color: "white",
              }}
            >
              程序：Vue React Next Node Three...
            </h6>
            <h6
              style={{
                color: "white",
              }}
            >
              设计：PS，AI，Lr，手绘，blender...
            </h6>
          </div>
        </div>
      </div>

      {/* 手绘 */}
      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f3f5f3",
        }}
      >
        <div
          style={{
            flex: "2",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#0f3c00",
              textAlign: "center",
              backgroundColor: "#f3f5f3",
            }}
          >
            手绘临摹
          </h3>
        </div>

        <div
          style={{
            flex: "8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* 轮播图 */}
          <div
            style={{
              height: "90%",
              width: "80%",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Carousel effect="fade" style={{ overflow: "hidden" }}>
              <div style={{ height: "100%" }}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/main/indexfrist.jpg"
                    alt=""
                    style={{
                      height: "480px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div style={{ height: "100%" }}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/main/indexfrist.jpg"
                    alt=""
                    style={{
                      height: "480px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* 建模 */}
      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            flex: "2",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#0f3c00",
              textAlign: "center",
              // borderBottom: "3px solid #0f3c00",
            }}
          >
            模型
          </h3>
        </div>

        <div
          style={{
            flex: "8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "#eee",
              height: "90%",
              width: "80%",
              borderRadius: "10px",
              overflow: "hidden",
              border: "10px solid #bedab5",
            }}
          >
            123123
          </div>
        </div>
      </div>

      {/* 动画 */}
      <div
        ref={(el) => (sectionsRef.current[3] = el)}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f3f5f3",
        }}
      >
        <div
          style={{
            flex: "2",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#0f3c00",
              textAlign: "center",
              // borderBottom: "3px solid #0f3c00",
            }}
          >
            动画
          </h3>
        </div>

        <div
          style={{
            flex: "8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "#eee",
              height: "90%",
              width: "80%",
              borderRadius: "10px",
              overflow: "hidden",
              border: "10px solid #bedab5",
            }}
          >
            123123
          </div>
        </div>
      </div>

      <div
        ref={(el) => (sectionsRef.current[4] = el)}
        style={{
          minHeight: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f3c00",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full gap-4 text-sm text-gray-100 py-8">
          <h1> </h1>
          <h1>Creative Commons License</h1>
          <h1 className="text-center">
            本站所有内容遵循 CC BY-NC 4.0
            协议，转载须注明署名和出处，且不可用于商业用途。若与其他同步平台协议冲突，以本网站为准。
          </h1>
        </div>
      </div>
    </div>
  );
}
