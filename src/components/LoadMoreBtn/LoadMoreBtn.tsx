import s from "./LoadMoreBtn.module.css";
interface LoadMoreBtnProps {
  onClick: () => void;
}
export const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button className={s.loadMore} onClick={onClick}>
      Load More
    </button>
  );
};
