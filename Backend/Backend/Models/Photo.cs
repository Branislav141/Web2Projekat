using Backend.Areas.Identity.Data;


namespace Backend.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public virtual BackendUser User { get; set; }
        public bool IsDeleted { get; set; }

    }
}
