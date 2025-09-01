import React from "react";

interface CategoryBadgeProps {
  children: React.ReactNode;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ children }) => {
  return (
    <div className="w-fit rounded-full bg-[#e3d4fa] dark:bg-[#3c2661] px-4 py-2 text-md uppercase text-[#3c2661] dark:text-[#e3d4fa]">
      {children}
    </div>
  );
};

export default CategoryBadge;
