export const useCustomTable = () => {
  const handleViewProfile = (itemId: number) => {
    console.log('handleViewProfile', itemId);
  };
  const handleViewPost = (itemId: number) => {
    console.log('handleViewPost', itemId);
  };

  return {
    handleViewProfile,
    handleViewPost,
  };
};
