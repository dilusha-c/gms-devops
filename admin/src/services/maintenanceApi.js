import api from './api';

export const addMaintenanceSchedule = async (maintenanceSchedule) => {
  return api.post('/maintenance-schedule', maintenanceSchedule);
}

export const getMaintenanceSchedule = async () => {
  return api.get('/maintenance-schedule');
}

export const getMaintenanceScheduleById = async (id) => {
  return api.get(`/maintenance-schedule/${id}`);
}

export const deleteMaintenanceSchedule = async (id) => {
  return api.delete(`/maintenance-schedule/${id}`);
}

export const searchMaintenanceSchedule = async (search) => {
  return api.get(`/maintenance-schedule/search?search=${encodeURIComponent(search)}`);
};

export const updateMaintenanceDate = async (id, maintenanceDate) => {
  return api.put(`/maintenance-schedule/${id}/MaintenanceDate?date=${encodeURIComponent(maintenanceDate)}`);
}

export const updateMaintenanceStatus = async (id, status) => {
  return api.put(`/maintenance-schedule/${id}/status?status=${encodeURIComponent(status)}`);
}

export const updateMaintenanceCost = async (id, maintenanceCost) => {
  return api.put(`/maintenance-schedule/${id}/cost?cost=${encodeURIComponent(maintenanceCost)}`);
}

export const updateMaintenanceTechnician = async (id, technician) => {
  return api.put(`/maintenance-schedule/${id}/technician?technician=${encodeURIComponent(technician)}`);
}

export const updateMaintenanceDescription = async (id, description) => {
  return api.put(`/maintenance-schedule/${id}/description?description=${encodeURIComponent(description)}`);
}

export const filterMaintenanceScheduleByStatus = async (status) => {
  return api.get(`/maintenance-schedule/filter-by-status?status=${encodeURIComponent(status)}`);
}

export const filterMaintenanceScheduleByType = async (type) => {
  return api.get(`/maintenance-schedule/filter-by-type?type=${encodeURIComponent(type)}`);
}

export const filterMaintenanceScheduleByEquipmentId = async (equipmentId) => {
  return api.get(`/maintenance-schedule/filter-by-equipmentId?equipmentId=${encodeURIComponent(equipmentId)}`);
}

// Monthly Maintenance Cost API
export const monthlyMaintenanceCost = async () => {
  return api.get('/monthly-costs');
};

export const updateMonthlyCost = async () => {
  return api.post('/update-monthly-costs');
};

export const filterByMonth = async (month) => {
  return api.get(`/filter-monthly-cost?month=${encodeURIComponent(month)}`);
};

export const filterByYear = async (year) => {
  return api.get(`/filter-yearly-cost?year=${encodeURIComponent(year)}`);
};
