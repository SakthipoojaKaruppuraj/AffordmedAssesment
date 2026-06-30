const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const sortNotifications = (notifications) => {
  return notifications
    .filter((item) => !item.read)
    .sort((a, b) => {
        
      if (priorityMap[b.Type] !== priorityMap[a.Type]) {
        return priorityMap[b.Type] - priorityMap[a.Type];
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);

    })
    .slice(0, 10);
};