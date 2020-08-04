package br.com.accenture.tasklist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.accenture.tasklist.model.ResponseModel;
import br.com.accenture.tasklist.model.TaskModel;
import br.com.accenture.tasklist.repository.TaskRepository;



@RestController
@RequestMapping("/tasklist")
public class TaskService {
	
	@Autowired
	private TaskRepository tl;
	
	//Visualizar a Lista de Tarefas
	@GetMapping(produces="application/json")
	public @ResponseBody List<TaskModel> showTask(){
		return this.tl.findAll();
	}	
	
	//Criar uma Nova Tarefa
	@PostMapping()
	public @ResponseBody ResponseModel newTask(@RequestBody TaskModel task) {
		
		try {
			
			this.tl.save(task);
			return new ResponseModel(1,"Nova tarefa criada com Sucesso!");
			
		}catch(Exception e) {
			return new ResponseModel(0,e.getMessage());
		}
	}
	
	//Atualizar uma Tarefa
	@PutMapping()
	public @ResponseBody ResponseModel updateTask(@RequestBody TaskModel task) {
		try {
			this.tl.save(task);
			
			return new ResponseModel(1,"Tarefa atualiza com Sucesso!");
			
		}catch(Exception e) {
			
			return new ResponseModel(0,e.getMessage());
		}
	}
	//Excluir uma Tarefa
	@DeleteMapping()
	public @ResponseBody ResponseModel deleteTask(@RequestBody TaskModel task) {

		try {
			tl.delete(task);
			return new ResponseModel(1,"Tarefa Removida com Sucesso!");
			
		}catch(Exception e){
			return new ResponseModel(0,e.getMessage());
			
		}
	}

}
