function StudentCard({id,name,course,onDelete,onEdit}) {
  return (
    <div className="student-card">
      <div>
        <h3>{name}</h3>
        <p>{course}</p>
      </div>
      <div>
        <button type="button" onClick={onEdit}>Edit</button>
        <button type="button" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
}

export default StudentCard;