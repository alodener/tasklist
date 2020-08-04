package br.com.accenture.tasklist.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import br.com.accenture.tasklist.model.TaskModel;

public interface TaskRepository extends Repository<TaskModel, Integer>{
	
	void save(TaskModel task);
	
	void delete(TaskModel task);
	
	List<TaskModel> findAll();
	
	TaskModel findByCodigo(Integer codigo);

}
