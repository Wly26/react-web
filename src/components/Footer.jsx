import React from 'react'

// 函数式组件
export default function Footer() {
	return (
    <div className="flex flex-col items-center justify-center w-full gap-4 text-sm text-gray-100 py-8">
      {/* <h1>Copyright © 2024 应怜 Built with Docusaurus.</h1> */}
      <h1>Creative Commons License</h1>
      <h1 className="text-center">
        本站所有内容遵循 CC BY-NC 4.0协议，转载须注明署名和出处，且不可用于商业用途。若与其他同步平台协议冲突，以本网站为准。
      </h1>
    </div>
  );
}

